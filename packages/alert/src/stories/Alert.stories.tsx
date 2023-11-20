import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Title from '@bootwind/title';
import Alert, { AlertProps } from '../index';

export default {
  tags: ['autodocs'],
  title: 'Components/Alert',
  component: Alert,
  args: {
    title: "Hi There!",
    description: 'Welcome back, User!',
    dismissButton: false,
  },
  argTypes: {
    description: {
      description: 'The title text',
      type: "string",
      control: {
        type: 'text'
      }
    },
    dismissButton: {
      description: 'Whether to show dismiss button',
      type: "boolean",
      control: {
        type: 'boolean',
      }
    },
    link: {
      description: 'Add link to the alert',
      type: "string",
      control: {
        type: 'object',
      }
    },
    icon: {
      description: 'Alert icon',
      type: "boolean",
      control: {
        type: 'boolean',
      }
    },
    variant: {
      description: 'The color type of the alert',
      type: "string",
      options: ['warning', 'danger', 'success', 'info'],
      control: {
        type: 'select',
      }
    },
  },
} as Meta;
type Story = StoryObj<AlertProps>;

export const WithTitle: Story = {
  args: {
    variant: 'info',
    title: "With Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rerum sequi, aperiam nihil harum sapiente veniam rem soluta quasi fugit voluptatem voluptate tempora consectetur vitae dignissimos at ipsum perspiciatis ab!"
  }
}
export const WithoutTitle: Story = {
  args: {
    title: "",
    variant: 'success',
    description: "Order success"
  }
}
export const DismissButton: Story = {
  args: {
    title: "Invalid credentials",
    variant: 'error',
    description: "Wrong username or password",
    dismissButton: true,
  }
}
export const WithIcon: Story = {
  args: {
    variant: 'info',
    description: "A new software update is available. See what’s new in version 2.0.4.",
    title: "Information",
    icon: true
  }
}
export const Link: Story = {
  args: {
    variant: 'info',
    description: "A new software update is available. See what’s new in version 2.0.4.",
    title: "Information",
    icon: true,
    
    link: {
      url: 'https://google.com',
      text: 'Open link'
    }
  }
}