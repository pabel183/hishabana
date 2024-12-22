"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

interface DashbaordCardProps {
    cardColor?:string;
    titleIcon?: IconType;
    cardTitle: number;
    cardDescription: string;
    cardIcon: IconType,
}

export const DashbaordCard: React.FC<DashbaordCardProps> = ({
    cardColor,
    titleIcon: TitleIcon,
    cardTitle,
    cardDescription,
    cardIcon: Icon,
}) => {
    return (
        <Card className={cn("text-neutral-50 group",cardColor)}>
            <CardContent className="pt-6">
                <div className="h-full w-full flex justify-between items-center">
                    <div className="flex flex-col justify-between gap-6">
                        <CardTitle className="flex lg:text-5xl md:text-3xl text-5xl">
                            {TitleIcon && <TitleIcon />}
                            {cardTitle}
                        </CardTitle>
                        <CardDescription>
                            <h2 className="text-lg text-neutral-50">
                                {cardDescription}
                            </h2>
                        </CardDescription>
                    </div>
                    <div className="flex items-center justify-between">
                        <Icon className="lg:size-28 md:size-20 size-28 text-gray-600 opacity-20 scale-95 group-hover:scale-100 ease-out transform duration-300" />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
