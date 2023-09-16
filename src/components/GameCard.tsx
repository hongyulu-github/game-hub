
import { Game } from '../hooks/useGames'
import {Card,Image,CardBody,Heading, Text} from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'

interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {
  return (
    <Card borderRadius={10} overflow={'hidden'} width={'sm'}>
        <Image  src={game.background_image}/>
        <CardBody>
            <Heading fontSize={'2lg'}>{game.name}</Heading>
        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
        </CardBody>
    </Card>
  )
}

export default GameCard