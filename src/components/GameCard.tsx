
import { Game } from '../hooks/useGames'
import {Card,Image,CardBody,Heading,HStack } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'

interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {
  return (
    <Card borderRadius={10} overflow={'hidden'} width='300px'>
        <Image  src={game.background_image}/>
        <CardBody>
            <Heading fontSize={'2lg'}>{game.name}</Heading>
        <HStack justifyContent='space-between'>
        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
        <CriticScore score={game.metacritic} />
        </HStack>
        


        </CardBody>
    </Card>
  )
}

export default GameCard