import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneGlobeRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneGlobeRegularIcon',
  component: StandaloneGlobeRegularIcon,
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
} satisfies Meta<typeof StandaloneGlobeRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneGlobeRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
