import React from 'react';
import Loader from '../ui/Loader';

const LoaderDemo = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-orange-950 to-slate-900">
            <div className="container mx-auto px-4 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                        SVG Morphing Loader
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Advanced loader with rotating polygons and dynamic color transitions
                    </p>
                </div>

                {/* Loader Demo */}
                <div className="max-w-2xl mx-auto">
                    <div className="bg-slate-900/80 rounded-2xl p-16 backdrop-blur-sm border border-orange-500/20 flex items-center justify-center">
                        <Loader />
                    </div>

                    {/* Usage Example */}
                    <div className="mt-8 bg-slate-800/30 rounded-xl p-6 border border-slate-700">
                        <h3 className="text-xl font-semibold mb-4 text-orange-400">Usage:</h3>
                        <pre className="text-sm text-gray-300 bg-slate-900/50 p-4 rounded-lg overflow-x-auto">
                            {`import Loader from './components/ui/Loader';

// Use it anywhere in your app
<Loader />`}
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoaderDemo;
