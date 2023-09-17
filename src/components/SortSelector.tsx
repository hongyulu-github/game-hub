import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
  } from '@chakra-ui/react'
  import {BsChevronDown} from 'react-icons/bs'

 interface Props{
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrder:string
 }

const SortSelector = ({onSelectSortOrder,sortOrder}: Props) => {
  const sortOrders = [
    { value:'' , label: 'Relevance'},
    { value:'-added' , label: 'Date added'},
    { value:'name' , label: 'Name'},
    { value:'-released' , label: 'Release date'},
    { value:'released' , label: 'Date: from the oldest to the newest'},

    { value:'-metacritic' , label: 'Popularity'},
    { value:'-rating' , label: 'Average Rating'},
    { value:'rating' , label: 'Rating: from the worst to the best'},

  ]


  const currentSortOrder = sortOrders.find(order => order.value === sortOrder)
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            Order by :  {currentSortOrder?.label || 'Relevance'}
        </MenuButton>
        <MenuList>

            {sortOrders.map(order => 
            <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>
                {order.label}
            </MenuItem>)}
          
            
        </MenuList>

    </Menu>
  )
}

export default SortSelector