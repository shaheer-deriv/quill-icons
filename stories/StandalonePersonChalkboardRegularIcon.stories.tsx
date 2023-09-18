import type { Meta, StoryObj } from '@storybook/react';

import { StandalonePersonChalkboardRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandalonePersonChalkboardRegularIcon',
  component: StandalonePersonChalkboardRegularIcon,
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
} satisfies Meta<typeof StandalonePersonChalkboardRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandalonePersonChalkboardRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
