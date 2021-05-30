import opportunity1 from 'assets/Content/Opportunities/Vaga1.png';
import opportunity2 from 'assets/Content/Opportunities/Vaga2.png';
import opportunity3 from 'assets/Content/Opportunities/Vaga3.png';
import IContent from '../interfaces/content.interface';

const Opportunities: IContent[] = [
    {
        id: "designer-de-produtos",
        description: 'Apperture Science',
        banner: opportunity1,
        title: 'Designer de produtos',
        type: 'Course'
    },
    {
        id: "ux-writer-jr",
        description: 'Orwell',
        banner: opportunity2,
        title: 'UX Writer Jr.',
        type: 'Course'
    },
    {
        id: "designer-de-interfaces-pleno",
        description: 'Abstergo Industries',
        banner: opportunity3,
        title: 'Designer de Interface Pleno',
        type: 'Course'
    },
];

export default Opportunities;
