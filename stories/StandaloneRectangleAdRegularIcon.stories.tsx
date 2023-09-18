import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneRectangleAdRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneRectangleAdRegularIcon',
  component: StandaloneRectangleAdRegularIcon,
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
} satisfies Meta<typeof StandaloneRectangleAdRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneRectangleAdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
