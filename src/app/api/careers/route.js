import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const IS_PRODUCTION = process.env.NODE_ENV === "production";

// Translations for emails
const translations = {
  en: {
    adminSubject: "New Career Application",
    adminTitle: "New Career Application",
    userSubject: "Thank you for your application",
    userTitle: "Thank You for Your Application",
    greeting: "Dear",
    applicationFor: "Application Received",
    hrContact: "Our HR team will review your application and contact you soon.",
    regards: "Best regards,",
    signature: "Mohamad Kodmani Real Estate - HR Department",
    footer: "This is an automated message. Please do not reply to this email.",
  },
  ar: {
    adminSubject: "طلب توظيف جديد",
    adminTitle: "طلب توظيف جديد",
    userSubject: "شكراً لتقديم طلبك",
    userTitle: "شكراً لتقديم طلبك",
    greeting: "عزيزي/عزيزتي",
    applicationFor: "تم استلام طلبك",
    hrContact: "سيقوم فريق الموارد البشرية بمراجعة طلبك والاتصال بك قريباً.",
    regards: "مع أطيب التحيات,",
    signature: "محمد قضماني للعقارات - قسم الموارد البشرية",
    footer: "هذه رسالة آلية. يرجى عدم الرد على هذا البريد الإلكتروني.",
  },
};

export async function POST(request) {
  console.log("📧 ========== CAREERS FORM API CALLED ==========");

  try {
    const formData = await request.formData();

    // Extract form data
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      locale: formData.get("locale") || "en",
      cvFile: formData.get("cv"),
    };

    console.log("📝 Form Data Received:", {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      messageLength: data.message?.length || 0,
      cvFile: data.cvFile ? "Present" : "Missing",
    });

    // Validate required fields
    if (
      !data.firstName ||
      !data.lastName ||
      !data.email ||
      !data.phone ||
      !data.message ||
      !data.cvFile
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields and upload your CV",
        },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Phone validation
    if (data.phone.replace(/\D/g, "").length < 7) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid phone number" },
        { status: 400 }
      );
    }

    console.log("✅ Form validation passed");

    // Create transporter
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
      ...(IS_PRODUCTION && {
        connectionTimeout: 30000,
        socketTimeout: 30000,
        debug: true,
        logger: true,
      }),
    });

    // Verify SMTP connection
    try {
      await transporter.verify();
      console.log("✅ SMTP connection verified");
    } catch (error) {
      console.error("❌ SMTP connection failed:", error);
    }

    // Prepare results
    const results = {
      adminEmail: { success: false, error: null },
      userEmail: { success: false, error: null },
    };

    const userLocale = data.locale || "en";
    const isRTL = userLocale === "ar";
    const t = translations[userLocale] || translations.en;

    try {
      // 1. Send to admin with attachment
      console.log("🔄 Sending admin email with CV...");
      results.adminEmail = await sendAdminEmailWithCV(
        transporter,
        data,
        t,
        isRTL
      );

      // 2. Send auto-reply to user
      console.log("🔄 Sending user auto-reply...");
      results.userEmail = await sendUserAutoReply(transporter, data, t, isRTL);
    } catch (error) {
      console.error("❌ Processing error:", error);
    }

    // Log results
    console.log("📊 ========== RESULTS ==========");
    console.log("📨 Admin Email:", results.adminEmail.success ? "✅" : "❌");
    console.log("📧 User Email:", results.userEmail.success ? "✅" : "❌");

    // Return success even if some components failed
    const successMessage =
      userLocale === "ar"
        ? "شكراً لتقديم طلبك! سيتواصل معك فريق الموارد البشرية قريباً."
        : "Thank you for your application! Our HR team will contact you soon.";

    return NextResponse.json({
      success: true,
      message: successMessage,
      data: {
        formType: "CAREERS_FORM",
        components: {
          adminEmail: results.adminEmail.success,
          userEmail: results.userEmail.success,
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

// Send email to admin with CV attachment
async function sendAdminEmailWithCV(transporter, data, t, isRTL) {
  try {
    const cvFile = data.cvFile;
    const cvBuffer = Buffer.from(await cvFile.arrayBuffer());
    const cvFileName = cvFile.name || "CV.pdf";

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
            <p style="margin: 8px 0 0 0;">Mohamad Kodmani Real Estate - HR Department</p>
        </div>
        
        <div style="padding: 25px;">
            <div style="background: #e7f3ff; border: 1px solid #b3d9ff; border-radius: 8px; padding: 15px; margin: 20px 0; text-align: center;">
                📄 ${
                  isRTL
                    ? "طلب توظيف جديد - CV مرفق"
                    : "New Career Application - CV Attached"
                }
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #d4af37;">
                <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                    <span style="font-weight: bold; color: #1a1a1a; min-width: 140px;">${
                      isRTL ? "الاسم:" : "Name:"
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
                <div style="padding: 10px 0;">
                    <span style="font-weight: bold; color: #1a1a1a; display: block; margin-bottom: 8px;">${
                      isRTL ? "الرسالة:" : "Message:"
                    }</span>
                    <div style="background: white; padding: 15px; border-radius: 6px; border: 1px solid #dee2e6; color: #495057;">
                        ${data.message.replace(/\n/g, "<br>")}
                    </div>
                </div>
            </div>
            
            <div style="text-align: center; margin: 20px 0;">
                <a href="mailto:${
                  data.email
                }" style="background: #d4af37; color: #1a1a1a; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block; margin: 5px; font-size: 14px;">
                    ✉️ ${isRTL ? "رد على البريد" : "Reply to Email"}
                </a>
                <a href="tel:${data.phone.replace(
                  /[^\d+]/g,
                  ""
                )}" style="background: #d4af37; color: #1a1a1a; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block; margin: 5px; font-size: 14px;">
                    📞 ${isRTL ? "اتصل بالمقدم" : "Call Applicant"}
                </a>
            </div>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0; border: 1px dashed #d4af37;">
                <p style="margin: 0; text-align: center; font-weight: bold;">
                    📎 ${
                      isRTL
                        ? "السيرة الذاتية مرفقة بهذا البريد"
                        : "CV is attached to this email"
                    }
                </p>
            </div>
        </div>
        
        <div style="background: #1a1a1a; color: #d4af37; padding: 15px; text-align: center; font-size: 12px; border-top: 1px solid #333;">
            <p style="margin: 0;">Mohamad Kodmani Real Estate - HR Department</p>
            <p style="margin: 8px 0 0 0;">${
              isRTL
                ? "تم إرسال هذا الطلب عبر موقع الويب"
                : "Submitted through website careers form"
            }</p>
        </div>
    </div>
</body>
</html>
    `;

    const emailText = `
${t.adminTitle.toUpperCase()}

${isRTL ? "الاسم:" : "Name:"} ${data.firstName} ${data.lastName}
${isRTL ? "رقم الهاتف:" : "Phone:"} ${data.phone}
${isRTL ? "البريد الإلكتروني:" : "Email:"} ${data.email}

${isRTL ? "الرسالة:" : "Message:"}
${data.message}

📎 ${isRTL ? "السيرة الذاتية مرفقة" : "CV attached"}

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
      attachments: [
        {
          filename: cvFileName,
          content: cvBuffer,
          contentType: cvFile.type || "application/pdf",
        },
      ],
      replyTo: data.email,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Admin email with CV sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("❌ Admin email with CV failed:", error);
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
                <p>${t.applicationFor}.</p>
                
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
                </div>
            </div>
            
            <div style="background: #fff9e6; border: 1px solid #ffeaa7; border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center;">
                <p style="margin: 0; font-size: 15px; font-weight: bold;">${
                  t.hrContact
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

${t.applicationFor}.

${isRTL ? "اسمك:" : "Your Name:"} ${data.firstName} ${data.lastName}
${isRTL ? "رقم هاتفك:" : "Your Phone:"} ${data.phone}
${isRTL ? "بريدك الإلكتروني:" : "Your Email:"} ${data.email}

${t.hrContact}

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
