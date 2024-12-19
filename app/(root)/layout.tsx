import { Sidebar } from "@/components/sidebar";

interface HomeLayoutProps {
    children: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({
    children
}) => {
    return (
        <div className="relative h-full w-full flex">
            <Sidebar />
            {children}
        </div>
    )
}
export default HomeLayout;