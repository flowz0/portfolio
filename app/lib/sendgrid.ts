import sgMail, { MailDataRequired } from "@sendgrid/mail";

type Props = {
  to: string;
  templateName: "ContactSubmission";
  // templateName: "ContactSubmission" | "AnotherSubmission"; -- for multiple templates
  dynamicTemplateData?: Record<string, string>;
};

export const sendEmail = async ({
  to,
  templateName,
  dynamicTemplateData,
}: Props) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
  const msg: MailDataRequired = {
    to,
    from: {
      email: "donotreply@bflows.dev",
      name: "flowz0",
    },
    templateId: templates[templateName],
    dynamicTemplateData
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send email");
  }
};

const templates = {
  ContactSubmission: "d-166075e6421643d88b874ebecfc90509",
  // AnotherSubmission: "d-166075e6421643d88b874ebecfc90509", -- for more templates
};