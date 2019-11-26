import LayoutContent from "../components/MyLayoutContent";
import Link from "next/link";

const pageContent = <p>Props.content</p>

export default function About() {
    return (
        <LayoutContent content={pageContent} />
    );
}