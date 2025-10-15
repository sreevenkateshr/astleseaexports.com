import React from "react";

const SuccessNotification = ({ title, message, onClose, type = "success" }) => {
  const colorClasses =
    type === "success"
      ? "bg-green-50 border-green-200 text-green-800"
      : "bg-red-50 border-red-200 text-red-800";

  const iconColor = type === "success" ? "text-green-400" : "text-red-400";

  return (
    <div className="w-80 flex flex-col gap-4 animate-slideIn">
      <div
        className={`p-5 rounded-xl border shadow-md hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 ${colorClasses}`}
      >
        <div className="flex">
          {/* Icon */}
          <div className="flex-shrink-0">
            <svg
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className={`${iconColor} w-6 h-6 drop-shadow-[0_0_8px_rgba(74,222,128,0.4)] animate-pulse`}
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d={
                  type === "success"
                    ? "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    : "M10 18a8 8 0 100-16 8 8 0 000 16zm-1-5h2v2H9v-2zm0-6h2v4H9V7z"
                }
              />
            </svg>
          </div>

          {/* Message */}
          <div className="ml-4">
            <p className="font-bold text-[1.05rem] flex items-center gap-2">
              {title}
            </p>
            <div className="mt-2 leading-relaxed text-sm">{message}</div>

            <div className="flex gap-3 mt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-green-800 text-white text-sm font-semibold rounded-md shadow-md hover:bg-green-700 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 transition-all"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessNotification;
