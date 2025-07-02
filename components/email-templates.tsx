import { Html, Head, Body, Container, Section, Text, Heading } from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function EmailTemplateForUser({ name, subject, message }: EmailTemplateProps) {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', margin: 0, padding: 0 }}>
        <Container style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff', padding: '20px' }}>
          <Section>
            <Heading as="h2" style={{ color: '#333', marginBottom: '20px' }}>
              Thank you for reaching out!
            </Heading>
            <Text style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', marginBottom: '15px' }}>
              Dear {name},
            </Text>
            <Text style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', marginBottom: '15px' }}>
              I have received your message and appreciate you taking the time to contact me.
            </Text>
            <Text style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', marginBottom: '15px' }}>
              I will review your inquiry and get back to you within 24 hours.
            </Text>
            <Section style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '5px', marginTop: '20px' }}>
              <Text style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
                <strong>Your Message Details:</strong>
              </Text>
              <Text style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>
                <strong>Subject:</strong> {subject}
              </Text>
              <Text style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
                <strong>Message:</strong> {message}
              </Text>
            </Section>
            <Text style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', marginTop: '20px' }}>
              Best regards,
            </Text>
            <Text style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', fontWeight: 'bold' }}>
              Thomas Pappas
            </Text>
            <Text style={{ fontSize: '14px', color: '#888', marginTop: '5px' }}>
              Senior Software Engineer
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export function EmailTemplateForAdmin({ name, email, subject, message }: EmailTemplateProps) {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', margin: 0, padding: 0 }}>
        <Container style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff', padding: '20px' }}>
          <Section>
            <Heading as="h2" style={{ color: '#333', marginBottom: '20px' }}>
              New Portfolio Inquiry
            </Heading>
            <Text style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', marginBottom: '20px' }}>
              You have received a new message from your portfolio website.
            </Text>
            <Section style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '5px' }}>
              <Text style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
                <strong>From:</strong> {name} ({email})
              </Text>
              <Text style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
                <strong>Subject:</strong> {subject}
              </Text>
              <Text style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
                <strong>Message:</strong>
              </Text>
              <Text style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', backgroundColor: '#ffffff', padding: '10px', borderRadius: '3px' }}>
                {message}
              </Text>
            </Section>
            <Text style={{ fontSize: '14px', color: '#888', marginTop: '20px' }}>
              This message was sent from your portfolio contact form.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

