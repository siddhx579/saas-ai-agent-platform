import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardNavbar } from "@/modules/dashboard/ui/components/dashboard-navbar";
import { DashboardSidedbar } from "@/modules/dashboard/ui/components/dashboard-sidebar";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <SidebarProvider>
            <DashboardSidedbar />
            <main className="flex flex-col h-screen w-screen bg-muted">
                <DashboardNavbar />
                {children}
            </main>
        </SidebarProvider>
    );
}

export default Layout;