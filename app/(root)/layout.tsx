import { Sidebar } from "@/components/sidebar";

interface HomeLayoutProps {
    children: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({
    children
}) => {
    return (
        <div className="w-full flex relative bg-slate-600">
            {/** Globally sidebar setup */}
            <Sidebar />
            {children}
        </div>
    )
}
export default HomeLayout;