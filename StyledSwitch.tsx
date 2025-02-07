import { styled, Switch } from "@material-ui/core";

export const StyledSwitch = styled(Switch)(() => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: '#684EF3',
                opacity: 1,
                border: 0,
            },
        }
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 13,
        backgroundColor: '#E9E9EA',
        opacity: 1,
    },
}));

// how to used in page
<StyledSwitch data-test-id='shownotification' checked={this.state.isNotificationsEnabled} onChange={this.handleNotificationsToggle} />
