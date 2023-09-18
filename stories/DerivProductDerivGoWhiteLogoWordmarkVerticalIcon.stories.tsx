import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivGoWhiteLogoWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivGoWhiteLogoWordmarkVerticalIcon',
  component: DerivProductDerivGoWhiteLogoWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivGoWhiteLogoWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivGoWhiteLogoWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
