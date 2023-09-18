import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCloneRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCloneRegularIcon',
  component: StandaloneCloneRegularIcon,
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
} satisfies Meta<typeof StandaloneCloneRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCloneRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
