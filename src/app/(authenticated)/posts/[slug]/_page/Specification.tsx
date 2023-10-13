import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export default function Specification() {
    return (
        <div className="space-y-8">
            <div className="flex items-center">
                <Avatar className="h-9 w-9">
                    <AvatarImage src="/specification/icons8-gearbox-32.png" alt="Avatar" />
                    <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Transmission</p>
                    <p className="text-sm text-muted-foreground">
                        Learn more about transmission.
                    </p>
                </div>
                <div className="ml-auto font-medium">Automatic</div>
            </div>
            <div className="flex items-center">
                <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
                    <AvatarImage src="/specification/icons8-fuel-32.png" alt="Avatar" />
                    <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Fuel Type</p>
                    <p className="text-sm text-muted-foreground">Learn more about fuel types.</p>
                </div>
                <div className="ml-auto font-medium">Gasoline</div>
            </div>
            <div className="flex items-center">
                <Avatar className="h-9 w-9">
                    <AvatarImage src="/specification/icons8-seat-32.png" alt="Avatar" />
                    <AvatarFallback>IN</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Seats</p>
                    <p className="text-sm text-muted-foreground">
                       How many seats inside
                    </p>
                </div>
                <div className="ml-auto font-medium">2</div>
            </div>
            <div className="flex items-center">
                <Avatar className="h-9 w-9">
                    <AvatarImage src="/specification/icons8-queue-50.png" alt="Avatar" />
                    <AvatarFallback>WK</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Estimate Max People</p>
                    <p className="text-sm text-muted-foreground">Max number of people fits in</p>
                </div>
                <div className="ml-auto font-medium">2</div>
            </div>
            <div className="flex items-center">
                <Avatar className="h-9 w-9">
                    <AvatarImage src="/specification/icons8-color-50.png" alt="Avatar" />
                    <AvatarFallback>WK</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Available Colors</p>
                    <p className="text-sm text-muted-foreground">Available colors to pick from</p>
                </div>
                <div className="ml-auto font-medium">black,orange</div>
            </div>
        </div>
    )
}