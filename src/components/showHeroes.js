
function ShowHeroes({ heroes }) {

    return (
        <div className="innerContainer" >
            <div className="scrollable">
                {heroes.map((hero, index) =>
                    <div className="heroContainer" key={index}>
                        <p>
                            <span>name:</span><span>{hero.name}</span>
                        </p>
                        <p>
                            <span>superpower:</span><span>{hero.superpower}</span>
                        </p>
                        <p>
                            <span>humility score:</span><span>{hero['humility score']}</span>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ShowHeroes;
