import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneGrid2RegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneGrid2RegularIcon',
  component: StandaloneGrid2RegularIcon,
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
} satisfies Meta<typeof StandaloneGrid2RegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneGrid2RegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
