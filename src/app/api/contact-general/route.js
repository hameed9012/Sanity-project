import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const IS_PRODUCTION = process.env.NODE_ENV === "production";

// Translations for emails
const translations = {
  en: {
    adminSubject: "New Contact Form Submission - Website",
    adminTitle: "New Contact Inquiry",
    userSubject: "Thank you for contacting Mohamad Kodmani Real Estate",
    userTitle: "Thank You for Your Inquiry",
    greeting: "Dear",
    inquiryReceived: "We have received your inquiry",
    contactTime: "Our team will contact you within 24 hours.",
    regards: "Best regards,",
    signature: "Mohamad Kodmani Real Estate Brokerage",
    footer: "This is an automated message. Please do not reply to this email.",
    priority: "📋 New Inquiry - Response Required Within 24 Hours",
  },
  ar: {
    adminSubject: "طلب اتصال جديد من الموقع الإلكتروني",
    adminTitle: "طلب اتصال جديد",
    userSubject: "شكراً لاتصالك بمحمد قضماني للعقارات",
    userTitle: "شكراً لاستفسارك",
    greeting: "عزيزي/عزيزتي",
    inquiryReceived: "لقد استلمنا استفسارك",
    contactTime: "سيقوم فريقنا بالاتصال بك خلال 24 ساعة.",
    regards: "مع أطيب التحيات,",
    signature: "محمد قضماني للوساطة العقارية",
    footer: "هذه رسالة آلية. يرجى عدم الرد على هذا البريد الإلكتروني.",
    priority: "📋 استفسار جديد - الرد مطلوب خلال 24 ساعة",
  },
};

const contactMethodLabels = {
  en: {
    phone: "Phone Call",
    email: "Email",
  },
  ar: {
    phone: "مكالمة هاتفية",
    email: "بريد إلكتروني",
  },
};

export async function POST(request) {
  console.log("📧 ========== CONTACT FORM API CALLED ==========");

  try {
    const formData = await request.json();
    console.log("📝 Form Data Received:", {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message?.substring(0, 50) + "...",
      contactMethod: formData.contactMethod,
      locale: formData.locale,
      formType: formData.formType,
    });

    // Validate required fields
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phone ||
      !formData.email
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            formData.locale === "ar"
              ? "يرجى ملء جميع الحقول المطلوبة"
              : "Please fill in all required fields",
        },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        {
          success: false,
          message:
            formData.locale === "ar"
              ? "يرجى إدخال بريد إلكتروني صحيح"
              : "Please enter a valid email address",
        },
        { status: 400 }
      );
    }

    console.log("✅ Form validation passed");

    // Create transporter with your credentials
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.hostinger.com",
      port: parseInt(process.env.EMAIL_PORT || "465"),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER || "info@mohamadkodmani.ae",
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Verify SMTP connection
    try {
      await transporter.verify();
      console.log("✅ SMTP connection verified");
    } catch (error) {
      console.error("❌ SMTP connection failed:", error.message);
    }

    // Prepare results
    const results = {
      adminEmail: { success: false, error: null },
      userEmail: { success: false, error: null },
      respondIo: { success: false, error: null },
    };

    const userLocale = formData.locale || "en";
    const isRTL = userLocale === "ar";
    const t = translations[userLocale] || translations.en;

    try {
      // 1. Send to admin
      console.log("🔄 Sending admin email...");
      results.adminEmail = await sendAdminEmail(
        transporter,
        formData,
        t,
        isRTL
      );

      // 2. Send auto-reply to user
      console.log("🔄 Sending user auto-reply...");
      results.userEmail = await sendUserAutoReply(
        transporter,
        formData,
        t,
        isRTL
      );

      // 3. Send to respond.io
      console.log("🔄 Sending to respond.io...");
      results.respondIo = await sendToRespondIO(formData);
    } catch (error) {
      console.error("❌ Processing error:", error);
    }

    // Log results
    console.log("📊 ========== RESULTS ==========");
    console.log("📨 Admin Email:", results.adminEmail.success ? "✅" : "❌");
    console.log("📧 User Email:", results.userEmail.success ? "✅" : "❌");
    console.log("🤖 Respond.io:", results.respondIo.success ? "✅" : "❌");

    // Return success even if some components failed
    const successMessage =
      userLocale === "ar"
        ? "شكراً لك! سيتواصل معك فريقنا خلال 24 ساعة."
        : "Thank you! Our team will contact you within 24 hours.";

    return NextResponse.json({
      success: true,
      message: successMessage,
      data: {
        formType: formData.formType || "CONTACT_FORM",
        components: {
          adminEmail: results.adminEmail.success,
          userEmail: results.userEmail.success,
          respondIo: results.respondIo.success,
        },
      },
    });
  } catch (error) {
    console.error("❌ API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Server error. Please try again later.",
        error: IS_PRODUCTION ? undefined : error.message,
      },
      { status: 500 }
    );
  }
}

// Send email to admin
async function sendAdminEmail(transporter, data, t, isRTL) {
  try {
    const emailHtml = `
<!DOCTYPE html>
<html lang="${data.locale}" dir="${isRTL ? "rtl" : "ltr"}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${t.adminSubject}</title>
</head>
<body style="font-family: ${
      isRTL ? "Arial, Tahoma, sans-serif" : "Arial, sans-serif"
    }; max-width: 600px; margin: 0 auto; background: #f8f9fa; color: #333; line-height: 1.6; text-align: ${
      isRTL ? "right" : "left"
    };">
    <div style="background: #ffffff; border-radius: 12px; overflow: hidden; margin: 20px auto; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <div style="background: #1a1a1a; color: #d4af37; padding: 25px; text-align: center; border-bottom: 4px solid #d4af37;">
            <h1 style="margin: 0; font-size: 22px; font-weight: bold;">${
              t.adminTitle
            }</h1>
            <p style="margin: 8px 0 0 0;">Mohamad Kodmani Real Estate</p>
        </div>
        
        <div style="padding: 25px;">
            <div style="background: #e7f3ff; border: 1px solid #b3d9ff; border-radius: 8px; padding: 15px; margin: 20px 0; text-align: center;">
                ${t.priority}
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #d4af37;">
                <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                    <span style="font-weight: bold; color: #1a1a1a; min-width: 140px;">${
                      isRTL ? "اسم العميل:" : "Client Name:"
                    }</span>
                    <span style="color: #495057; text-align: ${
                      isRTL ? "left" : "right"
                    };">${data.firstName} ${data.lastName}</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                    <span style="font-weight: bold; color: #1a1a1a; min-width: 140px;">${
                      isRTL ? "رقم الهاتف:" : "Phone:"
                    }</span>
                    <span style="color: #495057; text-align: ${
                      isRTL ? "left" : "right"
                    };">${data.phone}</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                    <span style="font-weight: bold; color: #1a1a1a; min-width: 140px;">${
                      isRTL ? "البريد الإلكتروني:" : "Email:"
                    }</span>
                    <span style="color: #495057; text-align: ${
                      isRTL ? "left" : "right"
                    };">${data.email}</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                    <span style="font-weight: bold; color: #1a1a1a; min-width: 140px;">${
                      isRTL ? "طريقة التواصل المفضلة:" : "Preferred Contact:"
                    }</span>
                    <span style="color: #495057; text-align: ${
                      isRTL ? "left" : "right"
                    };">${
      contactMethodLabels[data.locale || "en"][data.contactMethod] ||
      data.contactMethod
    }</span>
                </div>
                ${
                  data.message
                    ? `
                <div style="padding: 10px 0;">
                    <span style="font-weight: bold; color: #1a1a1a; display: block; margin-bottom: 8px;">${
                      isRTL ? "الرسالة:" : "Message:"
                    }</span>
                    <div style="background: white; padding: 15px; border-radius: 6px; border: 1px solid #dee2e6; color: #495057;">
                        ${data.message.replace(/\n/g, "<br>")}
                    </div>
                </div>
                `
                    : ""
                }
            </div>
            
            <div style="text-align: center; margin: 20px 0;">
                ${
                  data.contactMethod === "phone"
                    ? `
                <a href="tel:${data.phone.replace(
                  /[^\d+]/g,
                  ""
                )}" style="background: #d4af37; color: #1a1a1a; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block; margin: 5px; font-size: 14px;">
                    📞 ${isRTL ? "اتصل بالعميل" : "Call Client"}
                </a>
                `
                    : ""
                }
                
                ${
                  data.contactMethod === "email"
                    ? `
                <a href="mailto:${
                  data.email
                }" style="background: #d4af37; color: #1a1a1a; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block; margin: 5px; font-size: 14px;">
                    ✉️ ${isRTL ? "أرسل بريد" : "Email Client"}
                </a>
                `
                    : ""
                }
                
                <a href="https://wa.me/${data.phone.replace(
                  /[^\d+]/g,
                  ""
                )}" style="background: #25D366; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block; margin: 5px; font-size: 14px;">
                    💬 ${isRTL ? "واتساب" : "WhatsApp"}
                </a>
            </div>
        </div>
        
        <div style="background: #1a1a1a; color: #d4af37; padding: 15px; text-align: center; font-size: 12px; border-top: 1px solid #333;">
            <p style="margin: 0;">Mohamad Kodmani Real Estate Brokerage</p>
            <p style="margin: 8px 0 0 0;">${
              isRTL
                ? "تم إرسال هذا الطلب عبر موقع الويب"
                : "Submitted through website contact form"
            }</p>
        </div>
    </div>
</body>
</html>
    `;

    const emailText = `
${t.adminTitle.toUpperCase()}

${isRTL ? "اسم العميل:" : "Client Name:"} ${data.firstName} ${data.lastName}
${isRTL ? "رقم الهاتف:" : "Phone:"} ${data.phone}
${isRTL ? "البريد الإلكتروني:" : "Email:"} ${data.email}
${isRTL ? "طريقة التواصل المفضلة:" : "Preferred Contact:"} ${
      contactMethodLabels[data.locale || "en"][data.contactMethod] ||
      data.contactMethod
    }
${data.message ? `${isRTL ? "الرسالة:" : "Message:"}\n${data.message}\n` : ""}
${t.priority}

${new Date().toLocaleString("en-US", {
  timeZone: "Asia/Dubai",
  dateStyle: "full",
  timeStyle: "medium",
})}
    `;

    const mailOptions = {
      from: `"Mohamad Kodmani Real Estate" <${
        process.env.EMAIL_USER || "info@mohamadkodmani.ae"
      }>`,
      to: process.env.ADMIN_EMAIL || "info@mohamadkodmani.ae",
      subject: `${t.adminSubject} - ${data.firstName} ${data.lastName}`,
      text: emailText,
      html: emailHtml,
      replyTo: data.email,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Admin email sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("❌ Admin email failed:", error);
    return { success: false, error: error.message };
  }
}

// Send auto-reply to user
async function sendUserAutoReply(transporter, data, t, isRTL) {
  try {
    const emailHtml = `
<!DOCTYPE html>
<html lang="${data.locale}" dir="${isRTL ? "rtl" : "ltr"}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${t.userSubject}</title>
</head>
<body style="font-family: ${
      isRTL ? "Arial, Tahoma, sans-serif" : "Arial, sans-serif"
    }; max-width: 600px; margin: 0 auto; background: #f8f9fa; color: #333; line-height: 1.6; text-align: ${
      isRTL ? "right" : "left"
    };">
    <div style="background: #ffffff; border-radius: 12px; overflow: hidden; margin: 20px auto; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <div style="background: #1a1a1a; color: #d4af37; padding: 30px; text-align: center; border-bottom: 4px solid #d4af37;">
            <h1 style="margin: 0; font-size: 24px; font-weight: bold;">${
              t.userTitle
            }</h1>
            <p style="margin: 8px 0 0 0; opacity: 0.9;">Mohamad Kodmani Real Estate</p>
        </div>
        
        <div style="padding: 30px;">
            <div style="margin-bottom: 25px; font-size: 16px; color: #555;">
                <p>${t.greeting} ${data.firstName},</p>
                <p>${t.inquiryReceived}.</p>
                
                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #d4af37;">
                    <div style="margin-bottom: 8px;"><strong>${
                      isRTL ? "الاسم:" : "Name:"
                    }</strong> ${data.firstName} ${data.lastName}</div>
                    <div style="margin-bottom: 8px;"><strong>${
                      isRTL ? "رقم الهاتف:" : "Phone:"
                    }</strong> ${data.phone}</div>
                    <div style="margin-bottom: 8px;"><strong>${
                      isRTL ? "البريد الإلكتروني:" : "Email:"
                    }</strong> ${data.email}</div>
                    <div><strong>${
                      isRTL ? "طريقة التواصل المفضلة:" : "Preferred Contact:"
                    }</strong> ${
      contactMethodLabels[data.locale || "en"][data.contactMethod] ||
      data.contactMethod
    }</div>
                </div>
            </div>
            
            <div style="background: #fff9e6; border: 1px solid #ffeaa7; border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center;">
                <p style="margin: 0; font-size: 15px; font-weight: bold;">${
                  t.contactTime
                }</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
                <p style="margin: 0 0 8px 0;">${t.regards}</p>
                <p style="margin: 0; font-weight: bold; color: #d4af37;">${
                  t.signature
                }</p>
                <p style="margin: 15px 0 0 0; font-size: 14px; color: #666;">${
                  t.footer
                }</p>
            </div>
        </div>
        
        <div style="background: #1a1a1a; color: #d4af37; padding: 20px; text-align: center; font-size: 12px; border-top: 1px solid #333;">
            <p style="margin: 0;">${t.signature}</p>
            <p style="margin: 8px 0 0 0;">${
              isRTL ? "هذه رسالة آلية" : "This is an automated message"
            }</p>
        </div>
    </div>
</body>
</html>
    `;

    const emailText = `
${t.userTitle}

${t.greeting} ${data.firstName},

${t.inquiryReceived}.

${isRTL ? "اسمك:" : "Your Name:"} ${data.firstName} ${data.lastName}
${isRTL ? "رقم هاتفك:" : "Your Phone:"} ${data.phone}
${isRTL ? "بريدك الإلكتروني:" : "Your Email:"} ${data.email}
${isRTL ? "طريقة التواصل المفضلة:" : "Preferred Contact:"} ${
      contactMethodLabels[data.locale || "en"][data.contactMethod] ||
      data.contactMethod
    }

${t.contactTime}

${t.regards}
${t.signature}

${t.footer}
    `;

    const mailOptions = {
      from: `"Mohamad Kodmani Real Estate" <${
        process.env.EMAIL_USER || "info@mohamadkodmani.ae"
      }>`,
      to: data.email,
      subject: t.userSubject,
      text: emailText,
      html: emailHtml,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ User auto-reply sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("❌ User auto-reply failed:", error);
    return { success: false, error: error.message };
  }
}

// Send to respond.io
async function sendToRespondIO(data) {
  const token = process.env.RESPONDIO_TOKEN;
  if (!token) {
    console.log("❌ Respond.io token missing");
    return { success: false, error: "Token missing" };
  }

  try {
    // Format phone number
    const phone = data.phone.replace(/\D/g, "");
    let formattedPhone;

    if (phone.startsWith("971")) {
      formattedPhone = phone;
    } else if (phone.startsWith("0")) {
      formattedPhone = `971${phone.substring(1)}`;
    } else if (phone.startsWith("+971")) {
      formattedPhone = phone.substring(1);
    } else {
      formattedPhone = `971${phone}`;
    }

    // Create identifier
    const identifier = `email:${data.email.trim().toLowerCase()}`;

    // Custom fields
    const customFields = [
      { name: "form_type", value: data.formType || "CONTACT_FORM" },
      { name: "lead_source", value: "website" },
      { name: "locale_language", value: data.locale || "en" },
    ];

    if (data.contactMethod) {
      customFields.push({ name: "contact_method", value: data.contactMethod });
    }

    if (data.message && data.message !== "General contact inquiry") {
      customFields.push({
        name: "message",
        value: data.message.substring(0, 100),
      });
    }

    // Contact data
    const contactData = {
      firstName: data.firstName,
      lastName: data.lastName,
      phone: `+${formattedPhone}`,
      email: data.email.trim().toLowerCase(),
      language: data.locale === "ar" ? "ar" : "en",
      countryCode: data.countryCode || "AE",
      custom_fields: customFields,
    };

    // Send to respond.io
    const contactUrl = `https://api.respond.io/v2/contact/${encodeURIComponent(
      identifier
    )}`;

    const contactResponse = await fetch(contactUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token.trim()}`,
      },
      body: JSON.stringify(contactData),
    });

    const contactText = await contactResponse.text();

    if (contactResponse.ok || contactResponse.status === 403) {
      console.log("✅ Respond.io contact created/updated");

      // Apply tag
      const tagUrl = `${contactUrl}/tag`;
      const tagResponse = await fetch(tagUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token.trim()}`,
        },
        body: JSON.stringify(["website-lead"]),
      });

      const tagText = await tagResponse.text();
      console.log("🏷️ Respond.io tag applied:", tagResponse.status);

      return { success: true };
    } else {
      console.log("❌ Respond.io failed:", contactResponse.status, contactText);
      return { success: false, error: contactText };
    }
  } catch (error) {
    console.error("❌ Respond.io error:", error);
    return { success: false, error: error.message };
  }
}

export async function OPTIONS(request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
