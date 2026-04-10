const DEFAULT_ACCOUNTS_BASE_URL = "https://accounts.zoho.com";
const DEFAULT_API_BASE_URL = "https://www.zohoapis.com";
const DEFAULT_MODULE = "Leads";
const TOKEN_REFRESH_BUFFER_MS = 60_000;
const REQUIRED_CONFIG_KEYS = [
  "ZOHO_CLIENT_ID",
  "ZOHO_CLIENT_SECRET",
  "ZOHO_REFRESH_TOKEN",
];

let tokenCache = {
  accessToken: "",
  expiresAt: 0,
  apiDomain: "",
};

function trimTrailingSlash(value) {
  return String(value || "").replace(/\/+$/, "");
}

function getAccountsBaseUrl() {
  return trimTrailingSlash(
    process.env.ZOHO_ACCOUNTS_BASE_URL || DEFAULT_ACCOUNTS_BASE_URL
  );
}

function getApiBaseUrl() {
  return trimTrailingSlash(process.env.ZOHO_API_BASE_URL || DEFAULT_API_BASE_URL);
}

export function isZohoConfigured() {
  return getZohoMissingConfig().length === 0;
}

export function getZohoMissingConfig() {
  return REQUIRED_CONFIG_KEYS.filter((key) => !String(process.env[key] || "").trim());
}

async function refreshAccessToken() {
  if (!isZohoConfigured()) {
    throw new Error("ZOHO_NOT_CONFIGURED");
  }

  const body = new URLSearchParams({
    refresh_token: process.env.ZOHO_REFRESH_TOKEN,
    client_id: process.env.ZOHO_CLIENT_ID,
    client_secret: process.env.ZOHO_CLIENT_SECRET,
    grant_type: "refresh_token",
  });

  const response = await fetch(`${getAccountsBaseUrl()}/oauth/v2/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
    cache: "no-store",
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || !data?.access_token) {
    const message =
      data?.error ||
      data?.message ||
      data?.error_description ||
      `Zoho token refresh failed (${response.status})`;
    throw new Error(message);
  }

  tokenCache = {
    accessToken: data.access_token,
    expiresAt:
      Date.now() + Math.max(Number(data.expires_in || 3600) * 1000 - TOKEN_REFRESH_BUFFER_MS, 60_000),
    apiDomain: trimTrailingSlash(data.api_domain || ""),
  };

  return tokenCache;
}

async function getAccessToken() {
  if (
    tokenCache.accessToken &&
    tokenCache.expiresAt &&
    Date.now() < tokenCache.expiresAt
  ) {
    return tokenCache;
  }

  return refreshAccessToken();
}

function getModuleName() {
  return process.env.ZOHO_CRM_MODULE || DEFAULT_MODULE;
}

export async function createZohoRecord(record) {
  const moduleName = getModuleName();

  if (!isZohoConfigured()) {
    return {
      success: false,
      skipped: true,
      error: "ZOHO_NOT_CONFIGURED",
    };
  }

  const token = await getAccessToken();
  const apiBaseUrl = token.apiDomain || getApiBaseUrl();

  const response = await fetch(`${apiBaseUrl}/crm/v8/${moduleName}`, {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${token.accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: [record],
    }),
    cache: "no-store",
  });

  const data = await response.json().catch(() => ({}));
  const firstResult = Array.isArray(data?.data) ? data.data[0] : null;

  if (!response.ok || firstResult?.code !== "SUCCESS") {
    const message =
      firstResult?.message ||
      data?.message ||
      data?.error ||
      `Zoho create record failed (${response.status})`;
    throw new Error(message);
  }

  return {
    success: true,
    id: firstResult?.details?.id || "",
    module: moduleName,
  };
}
