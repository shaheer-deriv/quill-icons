import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneInfoRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneInfoRegularIcon',
  component: StandaloneInfoRegularIcon,
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
} satisfies Meta<typeof StandaloneInfoRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneInfoRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
