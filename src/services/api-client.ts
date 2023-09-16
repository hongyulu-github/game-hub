import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '27583f3d1c394d68bcc82d739caa56be'
    }
})