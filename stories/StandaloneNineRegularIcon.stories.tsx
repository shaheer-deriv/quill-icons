import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneNineRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneNineRegularIcon',
  component: StandaloneNineRegularIcon,
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
} satisfies Meta<typeof StandaloneNineRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneNineRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
