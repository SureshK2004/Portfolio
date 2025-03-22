//    hire-me
function handleEmailRedirect() {
    const email = "sureshksureshk04@gmail.com";
    const subject = "Hiring Inquiry";
    const body = `

Subject: Exciting Career Opportunity at [Your Company Name]

Hi Suresh K,

I hope this message finds you well.

We are impressed with your expertise and would like to discuss an exciting opportunity to join our team at [Your Company Name]. Below are the details:

Position: [Job Title]
Job Description: [Brief Description]
Location: [Remote/On-Site]
Compensation: [Salary/Hourly Rate]

Looking forward to your response to discuss this further.

Best regards,
[Your Name]
[Your Position]
[Your Company Name]
[Your Contact Information]`

    // Encode the email parameters
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Redirect to the mailto link
    window.location.href = mailtoLink;
}