import { SidebarListItem } from '@/src/shared/components/common/components/sidebar/SidebarListItem'
import { SidebarList as SidebarListType } from '@/src/shared/components/common/components/sidebar/types'

type SidebarListProps = {
  list: SidebarListType[]
}

export const SidebarList = ({ list }: SidebarListProps) => {
  return (
    <>
      {list.map((listItem, listItemIdx) => (
        <div key={listItemIdx} className="p-4">
          <div className="text-2xl">{listItem.title}</div>
          <ul>
            {listItem.items.map((item, idx) => (
              <SidebarListItem key={idx} label={item.label} icon={item?.icon} />
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
