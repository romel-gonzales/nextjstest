
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    navbar: {
        backgroundColor: '#232f3e',
        '& a' : {
            color: '#ffffff',
            marginLeft: 10
        }
    },
    footer: {
        marginTop: 10,
        textAlign: 'center'
    }, 
    main: {
        minHeight: '80vh'
    }
})

export default useStyles