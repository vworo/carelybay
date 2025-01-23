import PageHeader from "@/app/components/layout/page-header";
import { Container } from "@mui/material";

export default function SignUp() {
  return (
    <Container>
      <PageHeader
        heading="Sign up"
        subtitle="Enter your details to sign-up for a new Carelybay account!"
      />
    </Container>
  );
}
