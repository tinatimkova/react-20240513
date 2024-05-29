import { ScrollProgressBar } from '../scrollProgressBar/component.jsx';

export const Header = () => {

    return <header style={{'position': 'sticky', 'top': '0'}}>
          <ScrollProgressBar />
    </header>;
}