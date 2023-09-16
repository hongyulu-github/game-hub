
import { Game } from '../hooks/useGames'
import {Card,Image,CardBody,Heading} from '@chakra-ui/react'

interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {
  return (
    <Card borderRadius={10} overflow={'hidden'} width={'sm'}>
        <Image  src={game.background_image}/>
        <CardBody>
            <Heading fontSize={'2lg'}>{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard