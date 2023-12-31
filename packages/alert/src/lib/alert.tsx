import React, { ReactNode, useState } from 'react';
import { cn } from "@bootwind/common"
import { GoInfo, GoXCircle, GoCheckCircle } from 'react-icons/go';

export interface AlertProps {
  variant: 'warning' | 'error' | 'success' | 'info';
  icon?: boolean | ReactNode
  title?: string;
  description?: string | ReactNode;
  actions?: React.ReactNode;
  className?: string
  border?: "left" | "right" | "all" | "none"
  link?: {
    url: string;
    text: string;
  };
  dismissButton?: boolean;
}

const borders = {
  none: '',
  all: 'border',
  left: "border-l-4",
  right: "border-r-4"
}

const classes = {
  warning: {
    bg: 'bg-yellow-50 border-yellow-400',
    text: 'text-yellow-800',
    description: 'text-yellow-700',
    link: 'text-yellow-700 hover:text-yellow-600',
    dismissBtn: 'bg-yellow-50 text-yellow-500 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-yellow-50',
  },
  success: {
    bg: 'bg-green-50 border-green-400',
    text: 'text-green-800',
    description: 'text-green-700',
    link: 'text-green-700 hover:text-green-600',
    dismissBtn: 'bg-green-50 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50',
  },
  error: {
    bg: 'bg-red-50 border-red-400',
    text: 'text-red-800',
    description: 'text-red-700',
    link: 'text-red-700 hover:text-red-600',
    dismissBtn: 'bg-red-50 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50',
  },
  info: {
    bg: 'border-blue-400 bg-blue-50',
    text: 'text-blue-800',
    description: 'text-blue-700',
    link: 'text-blue-700 hover:text-blue-600',
    dismissBtn: 'bg-blue-50 text-blue-500 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-blue-50',
  },
}

export const Alert: React.FC<AlertProps> = ({
  variant = "info",
  title,
  icon,
  description,
  actions,
  border = "none",
  className,
  link,
  dismissButton = false,
}) => {
  const [isDismissed, setIsDismissed] = useState(false);

  const getIcon = () => {
    // Use the provided ReactNode icon in props if exists
    if (React.isValidElement(icon)) {
      return icon
    }

    switch (variant) {
      case 'warning':
        return (
          <GoInfo className="h-5 w-5 text-yellow-400" aria-hidden="true" />
        );
      case 'error':
        return (
          <GoXCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
        );
      case 'success':
        return (
          <GoCheckCircle
            className="h-5 w-5 text-green-400"
            aria-hidden="true"
          />
        );
      case 'info':
        return <GoInfo className="h-5 w-5 text-blue-400" aria-hidden="true" />;
      default:
        return null;
    }
  };

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  if (isDismissed) {
    return null;
  }

  return (
    <div
      className={cn(`rounded-md p-4`,classes[variant].bg,borders[border])}
    >
      <div className="flex flex-col md:flex-row">
        {icon && (
          <div className="flex-shrink-0 mr-3">{getIcon()}</div>
        )}
        <div className="flex-1">
          
          {title && (
            <h3
              className={`text-sm font-medium ${classes[variant].text}`}
            >
              {title}
            </h3>
          )}

          {/* Create gap between title and desc */}
          {title && description && <div className='mb-2'></div>}


          {description && (
            <div
              className={`text-sm ${classes[variant].description}`}
            >
              {typeof description === 'string' ? (
                <p>{description}</p>
              ) : (
                description
              )}
            </div>
          )}
          {actions && <div className="mt-4">{actions}</div>}
        </div>
        {link && (
          <p className="mt-3 text-sm md:mt-0 md:ml-3">
            <a
              href={link.url}
              className={`whitespace-nowrap font-medium ${classes[variant].link}`}
            >
              {link.text}
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </p>
        )}
        {dismissButton && (
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                onClick={handleDismiss}
                className={`inline-flex rounded-md p-1.5 ${classes[variant].dismissBtn}`}
              >
                <span className="sr-only">Dismiss</span>
                <GoXCircle className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Alert;
