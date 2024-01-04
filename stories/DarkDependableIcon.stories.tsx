import type { Meta, StoryObj } from '@storybook/react';

import { DarkDependableIcon } from '../src/react/Illustration';

const meta = {
  title: 'Illustrations/DarkDependableIcon',
  component: DarkDependableIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DarkDependableIcon>;

export default meta;

type Story = StoryObj<typeof DarkDependableIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
