export default function ResultCard({ result }) {
    if (!result.exists) {
        return (
            <div className="mt-6 p-4 bg-red-50 border border-red-300 rounded">
                <p className="text-red-700 font-semibold">
                    ❌ Certificate does not exist
                </p>
            </div>
        );
    }

    const { data } = result;

    return (
        <div className="mt-6 p-5 bg-green-50 border border-green-200 rounded-xl animate-fade-in">
            <div className="flex items-center gap-2 mb-3">
                <span className="text-green-700 text-lg">✅</span>
                <p className="font-semibold text-green-700">
                    Certificate Verified
                </p>
            </div>

            <div className="text-sm text-gray-700 space-y-1">
                <p><b>Name:</b> {data.candidate_name}</p>
                <p><b>Course:</b> {data.course_name}</p>
                <p><b>Issued by:</b> {data.issuer}</p>
                <p><b>Date:</b> {data.issued_date}</p>
            </div>

            {/* ISSUER BADGE */}
            {data.issuer.toLowerCase().includes("google") && (
                <div className="mt-3 flex items-center gap-2">
                    <img
                        src="https://www.gstatic.com/devrel-devsite/prod/v6f4c8c3d7b5b/google-logo.svg"
                        alt="Google"
                        className="h-5"
                    />
                    <span className="text-xs text-gray-500">
                        Official Google Certificate
                    </span>
                </div>
            )}

            {/* OFFICIAL LINK */}
            <a
                href={data.certificate_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-center py-2 rounded-lg font-semibold
               bg-green-600 text-white hover:bg-green-700
               transition shadow"
            >
                View & Download Official Certificate
            </a>

            <p className="text-[11px] text-gray-500 mt-3 text-center">
                Certificates are hosted and issued by the respective organizations.
            </p>
        </div>
    );
}
