import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneExclamationRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneExclamationRegularIcon',
  component: StandaloneExclamationRegularIcon,
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
} satisfies Meta<typeof StandaloneExclamationRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneExclamationRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
