import Explore from "@/components/Explore";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="bg-gray-50 w-full h-full">
        <Navbar />
        {children}
        <div className="mb-10">
         <Explore text="Related Products"/>
         </div>
        <Footer />
      </div>
  );
}
