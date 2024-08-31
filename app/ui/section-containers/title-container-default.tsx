import { noto_sans } from "@/app/utils/text-styling/fonts";

export default async function TitleContainer({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return(
        <section className="title">
            {children}
        </section>
    );
}