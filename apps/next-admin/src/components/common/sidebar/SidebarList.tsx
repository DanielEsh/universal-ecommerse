import { SidebarListItem } from "@/src/components/common/sidebar/SidebarListItem";
import { SidebarList as SidebarListType } from "@/src/components/common/sidebar/types";

type SidebarListProps = {
    list: SidebarListType[]
}

export const SidebarList = ({list}: SidebarListProps) => {
    return (
        <>
            {
                list.map((listItem) => (
                    <div className="p-4">
                        <div className="text-2xl">
                            {listItem.title}
                        </div>
                        <ul>
                            { listItem.items.map((item) => (
                                <SidebarListItem label={item.label} />
                            )) }
                        </ul>
                    </div>
                ))
            }
        </>
    )
}