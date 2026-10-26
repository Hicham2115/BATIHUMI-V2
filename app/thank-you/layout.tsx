import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function ThankYouLayout({ children }: LayoutProps<"/thank-you">) {
  return (
    <>
      <Header alwaysVisible />
      {children}
      <Footer />
    </>
  );
}
