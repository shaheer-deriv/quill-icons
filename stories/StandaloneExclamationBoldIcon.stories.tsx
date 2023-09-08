import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneExclamationBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneExclamationBoldIcon',
  component: StandaloneExclamationBoldIcon,
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
} satisfies Meta<typeof StandaloneExclamationBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneExclamationBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
