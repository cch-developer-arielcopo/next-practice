import Layout from "../components/MyLayout";
import Link from "next/link";
import "../style.css"


const PostLink = props => (
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

const Index = () => (
    <Layout>
        <h1 className="example">Testing</h1>
        <ul>
            <PostLink title="Hello Next.js" />
            <PostLink title="Learn Next.js is awesome" />
            <PostLink title="Deploy Apps with Zeits" />
        </ul>
        <style jsx>{`
            h2{
                font-family: 'Arial';
                color: 'red';
            }

        `}</style>
    </Layout>
);

// Make sure your React Component is the default export.
export default Index; 