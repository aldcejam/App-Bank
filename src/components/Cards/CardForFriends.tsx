import { memo } from "react";
import { UserProfileForCard } from "../UserProfile/UserProfile";

interface CardRecipientProps {
    isActive: boolean;
    RecipientImage: string;
}
function CardForFriendsComponent({ isActive, RecipientImage }: CardRecipientProps) {
    const colorCard = isActive ? "bg-constrast" : "bg-gray-300";
    return (
        <div className={`${colorCard} shadow-inner w-5/6 min-w-52 max-w-16 h-40 rounded-lg text-lg text-center p-3  flex items-center justify-center`}>
            <div>
                <UserProfileForCard image={RecipientImage} />
                <p>sjsj</p>
            </div>                      
        </div>
    )
}

export const CardForFriends = memo(CardForFriendsComponent)
