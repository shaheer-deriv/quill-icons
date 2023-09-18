import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeWebBrowserIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeWebBrowserIcon',
  component: IllustrativeWebBrowserIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fill: { control: { type: 'color' } },
    iconSize: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: 'md',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IllustrativeWebBrowserIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeWebBrowserIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
