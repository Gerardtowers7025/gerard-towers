import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message, website } =
      await req.json();

    // Honeypot spam field
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const cleanName = String(name).trim();
    const cleanEmail = String(email).trim();
    const cleanPhone = phone ? String(phone).trim() : "";
    const cleanSubject = String(subject).trim();
    const cleanMessage = String(message).trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email to Management Office
    await transporter.sendMail({
      from: `"Gerard Towers Website" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: cleanEmail,
      subject: `Website Contact: ${cleanSubject}`,
      text: `
Name: ${cleanName}
Email: ${cleanEmail}
Phone: ${cleanPhone || "Not provided"}
Subject: ${cleanSubject}

Message:
${cleanMessage}
      `,
    });

    // Confirmation Email to Sender
    await transporter.sendMail({
      from: `"Gerard Towers" <${process.env.GMAIL_USER}>`,
      to: cleanEmail,
      subject: "We Received Your Message",
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;color:#111;line-height:1.6;">
          
          <p>Hello ${cleanName},</p>

          <p>
            Thank you for contacting <strong>Gerard Towers</strong>.
          </p>

          <p>
            We have received your message and someone from the management office
            will review it shortly.
          </p>

          <p>
            <strong>Subject:</strong> ${cleanSubject}
          </p>

          <p>
            <strong>Your Message:</strong><br/>
            ${cleanMessage.replace(/\n/g, "<br/>")}
          </p>

          <p>
            Please do not reply with urgent or emergency matters.
            For urgent building issues, please contact the management office directly.
          </p>

          <hr style="border:none;border-top:1px solid #d1d5db;margin:24px 0;">

          <div style="font-size:14px;line-height:1.6;color:#111;">

            <div style="font-size:18px;font-weight:700;">
              Gerard Owners Corp.
            </div>

            <div style="font-weight:600;color:#555;">
              Management Office
            </div>

            <br>

            <div>
              7025 Yellowstone Blvd.<br>
              Forest Hills, NY 11375
            </div>

            <br>

            <div>
              <strong>Phone:</strong> (718) 263-7799
              &nbsp;|&nbsp;
              <strong>Fax:</strong> (718) 263-6569
            </div>

            <div>
              <strong>Email:</strong>
              <a href="mailto:contact@gerardownerscorp.com">
                contact@gerardownerscorp.com
              </a>
            </div>

          </div>

          <div
            style="
              margin-top:24px;
              font-size:11px;
              line-height:1.6;
              font-style:italic;
              color:#666;
            "
          >
            This transmittal and/or attachments may contain confidential or
            privileged information. If you are not the intended recipient,
            you are hereby notified that you have received this transmittal in
            error and your review, distribution or copying of this transmittal
            is strictly prohibited. If you have received this transmittal and/or
            attachments in error, please notify us immediately and delete this
            message and all attachments.

            <br><br>

            No electronic transmittal of information is risk free and
            Gerard Owners Corp. assumes no liability for any interception,
            diversion, or improper use by third parties of transmitted
            information. All information is from sources believed reliable,
            but no guarantee is given regarding any projections,
            information, or data contained in or attached to this transmittal.
          </div>

        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CONTACT FORM ERROR:", error);

    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}