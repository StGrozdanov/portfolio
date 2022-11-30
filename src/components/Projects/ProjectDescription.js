export default function ProjectDescription({ description, codeLink }) {
    return (
        <div>
            {description} 
            <a href={codeLink} target='blank' className='here-link'> here </a> and the 
            website for more information about the app by clicking the button bellow.
        </div>
    );
}