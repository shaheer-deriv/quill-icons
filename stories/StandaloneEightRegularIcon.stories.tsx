import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneEightRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneEightRegularIcon',
  component: StandaloneEightRegularIcon,
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
} satisfies Meta<typeof StandaloneEightRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneEightRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
