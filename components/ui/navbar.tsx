"use client";

export const Navbar = () => {
    return (
        <nav className="w-full h-20 flex bg-red-700 items-center px-8">
            <div className="flex gap-8">
                <div>
                    Logo
                </div>
                <h1 className="text-neutral-50 text-3xl font-semibold">
                    Account
                    <span className="font-normal">Dashboard</span>
                </h1>
            </div>
        </nav>
    )
}
