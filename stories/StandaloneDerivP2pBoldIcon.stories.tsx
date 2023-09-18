import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneDerivP2pBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneDerivP2pBoldIcon',
  component: StandaloneDerivP2pBoldIcon,
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
} satisfies Meta<typeof StandaloneDerivP2pBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneDerivP2pBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
