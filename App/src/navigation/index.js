import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import ViewActivities from '../pages/ViewActivities'
import AddActivities  from '../pages/AddActivities'
import ViewActivity   from '../pages/ViewActivity'

const StackNavigator = createStackNavigator(
    {
        ViewActivities: {
            screen: ViewActivities
        },
        AddActivities: {
            screen: AddActivities
        },
        ViewActivity: {
            screen: ViewActivity
        },
    },
    {
        initialRouteName: 'ViewActivities',
        headerMode: 'none'
    }
)

export default createAppContainer(StackNavigator)