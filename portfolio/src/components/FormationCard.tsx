type FormationProps = {
    degree: string;
    thingsDone: string[];
};

export function FormationCard({degree, thingsDone}: FormationProps) {
    return (
        <div className="flex flex-col rounded-lg p-6 border border-gray-300 gap-3 justify-between">
            <div>
                <h3 className="mb-2 text-xl font-medium leading-tight">{degree}</h3>
                <ul className="list-disc list-inside">
                    {thingsDone.map(t => (
                        <li key={t}>{t}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}