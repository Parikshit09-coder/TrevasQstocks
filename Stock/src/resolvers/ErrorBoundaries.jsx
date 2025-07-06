import React from 'react';

class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hasError:false}

        };

        static getDerivedStateFromError(error) {

            return {hasError:true};

        }

        componentDidCatch(error,errorInfo){
            console.error("Error caught by ErrorBoundary:", error, errorInfo);

        }

        render(){
            if(this.state.hasError){
                return (
                    <div className="flex h-[100vh] text-8xl justify-center items-center rounded-lg p-4 bg-gray-100">
                        <div className="w-16 h-16 border-8 border-dashed border-red-600 rounded-full animate-spin"></div>
                        <div className="text-red-600 font-semibold italic ml-4 text-2xl">Something went wrong!</div>
                    </div>
                );
            }

            return this.props.children;
        }
    }
export default ErrorBoundary;